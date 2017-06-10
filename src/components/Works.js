/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import Card from "react-mdl/lib/Card/Card"
import CardTitle from "react-mdl/lib/Card/CardTitle"
import CardActions from "react-mdl/lib/Card/CardActions"
import Button from "react-mdl/lib/Button"
import Style from "../style.css"

const Works = () => (
    <div>
        Works

        <div style={Style.overflow_y_parent}>
            <Card shadow={5} style={Style.overflow_y_child}>
                <CardTitle expand style={{
                    color: '#fff',
                    background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC',
                    "padding-top":"182px"
                }}>Update</CardTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.

                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
            <Card shadow={5} style={Style.overflow_y_child}>
                <CardTitle expand style={{
                    color: '#fff',
                    background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
                }}>Update</CardTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.

                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
            <Card shadow={5} style={Style.overflow_y_child}>
                <CardTitle expand style={{
                    color: '#fff',
                    background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
                }}>Update</CardTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.

                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
            <Card shadow={5} style={Style.overflow_y_child}>
                <CardTitle expand style={{
                    color: '#fff',
                    background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
                }}>Update</CardTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.

                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
            <Card shadow={5} style={Style.overflow_y_child}>
                <CardTitle expand style={{
                    color: '#fff',
                    background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
                }}>Update</CardTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.

                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
            <Card shadow={5} style={Style.overflow_y_child}>
                <CardTitle expand style={{
                    color: '#fff',
                    background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'
                }}>Update</CardTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenan convallis.

                <CardActions border>
                    <Button colored>View Updates</Button>
                </CardActions>
            </Card>
        </div>
    </div>
)

export default Works