/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import Card from "react-mdl/lib/Card/Card"
import ListItem from "react-mdl/lib/List/ListItem"
import ListItemContent from "react-mdl/lib/List/ListItemContent"

const LatestPosts = () => (
    <section>
        <h4>Latest Posts</h4>

        <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
            <div>
            <ListItem threeLine>
                <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
            </ListItem>
            <ListItem threeLine>
                <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
            </ListItem>
            <ListItem threeLine>
                <ListItemContent avatar="person" subtitle="Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle.">Bryan Cranston</ListItemContent>
            </ListItem>
            </div>
        </Card>
    </section>
)

export default LatestPosts