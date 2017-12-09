import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import styles from "./styles.js";
import PhotoGrid from 'react-native-photo-grid';

class NewGrid extends React.Component {

    constructor(props) {
        super(props);
        console.log('In NEW GRID: this.props is', this.props)
        this.state = { items: [] };
        this.renderFooter = this.renderFooter.bind(this);
    }

    componentDidMount() {
        let items = Array.apply(null, this.props.images).map((v, i) => {
            console.log('NEWGRID v ', v);
            console.log('NEWGRID i ', i);
            if (i <= 1) {
                return { id: i, src: v }
            }
        });
        if (this.props.images.length < 2) {
            for (var i = 0; i < 2 - this.props.images.length; i++) {
                items.push({ id: this.props.images.length + i, src: 'https://images.homedepot-static.com/productImages/95ef7131-9f78-4d41-9a07-d055f2d1a079/svn/mouse-matte-formica-laminate-sheets-009281258512000-64_400_compressed.jpg'})
            }
        }
        this.setState({ items });
        console.log('NEWGRID this.state.items is ', this.state.items);
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
                <Text style={[styles.bannerTop, styles.baseText]}>{this.props.title}</Text>
                <Text style={[styles.bannerBottom, styles.baseText]}>{this.props.author}</Text>
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

export default NewGrid;
