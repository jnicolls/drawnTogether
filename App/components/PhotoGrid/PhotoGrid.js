import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import styles from "./styles.js";
import PhotoGrid from 'react-native-photo-grid';

class CollectionGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        let items = Array.apply(null, Array(2)).map((v, i) => {
            if (i === 0) {
                return { id: i, src: 'https://news.artnet.com/app/news-upload/2015/08/martin-wong-Starry-Night.jpg' }
            }
            return { id: i, src: 'https://d32dm0rphc51dk.cloudfront.net/y2r9MALxNJSGRIwgLgXXBQ/larger.jpg' }
        });
        this.setState({ items });
    }

    render() {
        return(
            <PhotoGrid
                data = { this.state.items }
                itemsPerRow = { 2 }
                itemMargin = { 0 }
                renderItem = { this.renderItem }
                renderFooter = { this.renderFooter }
            />
        );
    }

    renderFooter() {
        return(
            <View style={{height: 75, backgroundColor: 'steelblue'}}>
                <Text style={[styles.bannerTop, styles.baseText]}>Collection Title</Text>
                <Text style={[styles.bannerBottom, styles.baseText]}>Curator Name</Text>
            </View>
        );
    }

    renderItem(item, itemSize) {
        return(
            <TouchableOpacity
                key = { item.id }
                style = {{ width: itemSize, height: itemSize }}
                onPress = { () => {
          // Do Something
        }}>
                <Image
                    resizeMode = "cover"
                    style = {{ flex: 1 }}
                    source = {{ uri: item.src }}
                />


            </TouchableOpacity>
        )
    }

}

export default CollectionGrid;
