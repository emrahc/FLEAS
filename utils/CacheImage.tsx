import React, { Component } from "react";
import {
  Image,
  ImageBackground,
  ImageProps,
  ImageRequireSource,
  ImageURISource,
  InteractionManager,
  View,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as Crypto from "expo-crypto";
import { Asset } from "expo-asset";
import { checkPhoto, insertPhoto } from "./db";
interface Props extends ImageProps {
  id: string;
  isBackground: boolean;
}
export type Source =
  | ImageURISource
  | ImageURISource[]
  | ImageRequireSource;

export interface State {
  source: Source;
  dbCheck: boolean | string;
}

export default class CacheImage extends React.Component<
  Props,
  State
> {
  state = {
    source: { uri: null },
    databaseImg: "",
    dbCheck: false,
  };

  async downloadImageee(uri: string, id: string) {
    const path = `${FileSystem.documentDirectory}${id}`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
      this.setState({
        source: {
          uri: image.uri,
        },
      });
      return;
    }

    const newImage = await FileSystem.downloadAsync(
      uri,
      path
    );
    this.setState({
      source: {
        uri: newImage.uri,
      },
    });
  }
  async downloadRemoteImage(
    uri: string,
    id: string,
    email: string
  ) {

    console.log(uri,"URI CACHE IMAGE")
    console.log(id,"ID CACHE IMAGE")
    const name = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      uri
    );
    const path = `${FileSystem.documentDirectory}${name}.png`;
    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
      return image.uri;
    }

    const newImage = await FileSystem.moveAsync({
      from: uri,
      to: path,
    });
    const imagedb = await insertPhoto(id, path, email);
    return path;
  }
  async downloadLocalImage(source: ImageRequireSource) {
    const asset = await Asset.fromModule(source);
    if (!asset.localUri) {
      await asset.downloadAsync();
    }
    this.setState({
      source: {
        uri: asset.localUri,
      },
    });
  }

  async returnNull() {
    return null;
  }

  async downloadImage(
    source: Source,
    id: number,
    email: string
  ) {
    const check = async (
      dbImage,
      dbCheckResult: boolean
    ): void => {

      if (dbCheckResult === true && !!dbImage) {
        this.setState({
          source: { uri: dbImage.imagePath },
        });
      } else if (dbCheckResult === false && !dbImage) {
        if (source.uri) {
          const newUri = await this.downloadRemoteImage(
            source.uri,
            id,
            email
          );
          return this.setState({
            source: {
              ...source,
              uri: newUri,
            },
          });
        }
      }
    };
    await checkPhoto(id, check, email);
  }

  static getDerivedStateFromProps(nextProps, props) {
    if (
      nextProps.source !== props.source &&
      nextProps.id !== props.id
    ) {
      return {
        source: props.source,
        id: props.id,
      };
    }
  }

  async componentDidMount() {
    console.log("This props source", this.props.source.uri);
    this.downloadImage(
      this.props.source,
      this.props.id,
      this.props.email
    );
  }

  render() {
    return (
      <View>
        {this.props.isBackground ? (
          <ImageBackground
            {...this.props}
            source={this.state.source}
          >
            {this.props.children}
          </ImageBackground>
        ) : (
          <Image
            {...this.props}
            source={this.state.source}
          />
        )}
      </View>
    );
  }
}
