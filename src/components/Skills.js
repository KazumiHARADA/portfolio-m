/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
//import Slider from 'react-mdl/lib/slider'
import Grid from "react-mdl/lib/Grid/Grid"
import Cell from "react-mdl/lib/Grid/Cell"
import Button from 'react-toolbox/lib/button';
import Slider from 'react-toolbox/lib/slider';
import Style from "../style.css"

const Skills = () => (
    <div>
        <h4>Skills</h4>
        <Grid>
            <Cell col="1"/>
            <Cell col="10">
                <Grid>
                    <Cell col="3">
                        <Grid>
                            <Cell col="12">
                                Java
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                Kotlin
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                Objective-C
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                Swift
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col="3">
                        <Grid>
                            <Cell col="12">
                                HTML
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                CSS
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                Javascript
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                Vue.js
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col="3">
                        <Grid>
                            <Cell col="12">
                                PHP
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                Smarty
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                Nodejs
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                EJS
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                        </Grid>
                    </Cell>
                    <Cell col="3">
                        <Grid>
                            <Cell col="12">
                                Shell
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                Scheme
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                            <Cell col="12">
                                Clojure
                                <Slider pinned snaps min={0} max={100} step={10} value={50} onChange={function () {
                                    console.log(1)
                                }}/>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </Cell>
            <Cell col="1" />
        </Grid>
    </div>
)

export default Skills