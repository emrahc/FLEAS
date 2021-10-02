import React from 'react'
import { View, Text } from 'react-native'
import { UPLOAD_IMAGE } from '../constants/Api';
import { useFetchImage } from './useFetchImage';

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as ImageManipulator from "expo-image-manipulator";
import { isIOS } from '../constants/Platform';
import { Size } from './Size';
import { PhotoCount } from './AdsHandler';

export const UploadHandler = async (L, result, setLoading,
	photoError, kickout, navigation, upload, st, handleAd, launchEditor, fromAnalysisPage) => {
	console.log("UploadHandler")
	const controller = new AbortController();
	const signal = controller.signal;
	const abort = () => {
		controller.abort();
	};
	const nav = () => fromAnalysisPage ? navigation.replace("AnalysisScreen") : navigation.navigate("AnalysisScreen");
 

	const electPhoto = async () => {
		const result = await ImagePicker.launchImageLibraryAsync(
			{
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsMultipleSelection: false,
				// compress: 0,
				// quality: 0,
			}
		);
		if (result.cancelled === true) { 
			setLoading(false);
		}
		if (result.cancelled === false) {
			launchEditor(result.uri);
		}
	};
       
	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			allowsMultipleSelection: false,
			aspect: [1, 1],
		});

		setLoading(
			true,
			L("CommonPhotoAnalyze"),
			abort,
			result.uri
		);
		if (result.cancelled === true) {
			setLoading(false);
		}
		if (result.cancelled === false) {
			console.log(
				await FileSystem.getInfoAsync(result.uri, {
					size: true,
				}),
				"FILE SYSTEM ASYNC"
			);
			const { size } = await FileSystem.getInfoAsync(
				result.uri,
				{
					size: true,
				}
			);

			console.log(size, "RESULTTTTTTTTTTTTTTTT");

			const compress = Size(size);

			console.log(compress, "COMPRESS");
			let croppedPhoto = await ImageManipulator.manipulateAsync(
				result.uri,
				[
					{
						resize: {
							width: result.width,
							height: result.height,
						},
					},
				],
				{
					compress,
					format: ImageManipulator.SaveFormat.JPEG,
				}
			);
			console.log(
				await FileSystem.getInfoAsync(croppedPhoto.uri, {
					size: true,
				}),
				"FILE SYSTEM ASYNC cropped"
			);
			console.log(result, "RESULT PHOTO");
			console.log(croppedPhoto, "CROPPED PHOTO PICKER");
			await uploadPhoto(croppedPhoto)
		}
	};
	const uploadPhoto = async (result) => {
		console.log("UPLOAD PHOTO")
		setLoading(
			true,
			L("CommonPhotoAnalyze"),
			abort,
			result.uri
		);
		const { response, error } = await useFetchImage(
			UPLOAD_IMAGE,
			"POST",
			result,
			signal
		);

		if (error) {
			setLoading(false);
			console.log(error, " PHOTO UPLOAD ERROR");
			photoError(error, kickout, navigation);
		} else {
			console.log(response,"Response")
			console.log(result.uri,"RESULT HANDLER")
			await upload(response, result.uri, false);
			await handleAd(nav())
		}

	}

	result ? await uploadPhoto(result) : isIOS ? electPhoto() : pickImage()
}

