import React, { Component } from 'react'
import ShopData from './ShopData'
import CollPreview from './CollPreview'

export class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections: ShopData
              
        }
    }
    
    render() {
        const {collections} = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherCollectionProps}) => (<CollPreview key={id} {...otherCollectionProps}/>))
                }
            </div>
        )
    }
}

export default ShopPage
