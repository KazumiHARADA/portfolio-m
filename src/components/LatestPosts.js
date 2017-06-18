/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import Card from "react-mdl/lib/Card/Card"
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';

const LatestPosts = () => (
    <section>
        <h4>Latest Posts</h4>

        <Card shadow={4} style={{width: '100%', height: '100%', margin: 'auto'}}>
            <List selectable ripple>
                <ListItem
                    avatar='../image/icon_qiita.png'
                    caption='Dr. Manhattan'
                    legend="Jonathan 'Jon' Osterman"
                />
                <ListItem
                    avatar='../image/icon_twitter.png'
                    caption='Ozymandias'
                    legend='Adrian Veidt'
                />
                <ListItem
                    avatar='../image/icon_twitter.png'
                    caption='Ozymandias'
                    legend='Adrian Veidt'
                />
            </List>
        </Card>
    </section>
)

export default LatestPosts