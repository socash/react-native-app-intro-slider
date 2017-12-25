import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import { Spinner } from 'native-base';

export default class DefaultSlide extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  onImageLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const style = {
      backgroundColor: this.props.backgroundColor,
      paddingTop: this.props.topSpacer,
      paddingBottom: this.props.bottomSpacer,
    };

    return (
      <View style={[styles.mainContent, style]}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Image source={this.props.image} style={this.props.imageStyle} onLoad={this.onImageLoad} />
        {!this.state.loaded && <Spinner style={this.props.imageStyle} color="#000000" />}
        <Text style={styles.text}>{this.props.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255, 255, 255, .7)',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '300',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    color: 'rgba(255, 255, 255, .7)',
    fontWeight: '300',
    paddingHorizontal: 16,
  }
});