import React, { Component } from 'react';
import { Image, TouchableOpacity, Text, View, TouchableHighlight } from 'react-native';
import styles from "./styles.js";
import PhotoGrid from 'react-native-photo-grid';

class MakeCollectionGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], disabled: false, selected: [] };
        this.renderItem = this.renderItem.bind(this);
        this.disable = this.disable.bind(this);
        this.insertImage = this.insertImage.bind(this);
    }

    componentDidMount() {
        let items = Array.apply(null, Array(4)).map((v, i) => {
            if (i === 0) {
                return { id: i, src: 'http://www.barryxball.com/img/works/wo949.jpg' }
            } else if (i === 1) {
                return { id: i, src: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Fran%C3%A7ois-Guillaume_M%C3%A9nageot_-_Envy_Plucking_the_Wings_of_Fame_-_WGA15026.jpg' }
            } else if ( i === 2) {
                return { id: i, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1200px-Botticelli-primavera.jpg' }
            } else {
                return { id: i, src: 'https://uploads1.wikiart.org/images/edvard-munch/spring-day-on-karl-johan-street-1890.jpg' }
            }

        });
        this.setState({ items });
    }


    disable =()=>{
        this.setState({
            disabled : true ,
        })
    }

    insertImage = (image) =>{
        /*this.setState({
            selected:
        })*/
        this.state.selected.push(image)
        this.props.onAddImage(image);
        console.log('Updated this.state', this.state);
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

    renderItem(item, itemSize) {
        return(
            <TouchableHighlight
                key = { item.id }
                style = {{ width: itemSize, height: itemSize}}
                disabled={this.state.disabled}
                onPress = {
                    () => {this.disable, this.insertImage(item.src)}
                }>
                <Image

                    resizeMode = "cover"
                    style = {{ flex: 1, opacity: 0.5}}
                    source = {{ uri: item.src }}
                />


            </TouchableHighlight>
        )
    }

}

export default MakeCollectionGrid;
