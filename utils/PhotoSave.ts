
import { ImageRequireSource, ImageURISource } from "react-native";
import { checkPhoto, insertPhoto } from "./db";
import * as FileSystem from "expo-file-system";
import * as Crypto from "expo-crypto";
export type uri =
	| ImageURISource
	| ImageURISource[]
	| ImageRequireSource;

export const PhotoSave = async (
	id: number,
	email: string,
	uri: uri
) => {
 
	const check = async (
		dbImage,
		dbCheckResult: boolean
	): void => {

		if (dbCheckResult === true && !!dbImage) {

			return;
		} else if (dbCheckResult === false && !dbImage) {
       
			console.log(dbCheckResult, "DB CHECK RESULT")
			const name = await Crypto.digestStringAsync(
				Crypto.CryptoDigestAlgorithm.SHA256,
				uri
			);
			const path = `${FileSystem.documentDirectory}${name}.png`;
			const image = await FileSystem.getInfoAsync(path);
			if (image.exists) {
				return;

			}
			console.log(path, "PATH PhotoSave")
			await FileSystem.copyAsync({
				from: uri,
				to: path,
			});
			await insertPhoto(id, path, email);

 
		}
	}
	await checkPhoto(id, check, email);
};


