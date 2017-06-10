/**
 * Created by haradakazumi on 2017/06/10.
 */
import React from 'react'
import Slider from "react-mdl/lib/Slider"
import Grid from "react-mdl/lib/Grid/Grid"
import Cell from "react-mdl/lib/Grid/Cell"

const Skills = () => (
    <div>
        skills
        <Grid>
            <Cell col="1"/>
            <Cell col="10">
                <Grid>
                    <Cell col="3">Java<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Kotlin<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Objective-C<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Swift<Slider min={0} max={100} defaultValue={25}/></Cell>
                </Grid>
                <Grid>
                    <Cell col="3">Java<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Kotlin<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Objective-C<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Swift<Slider min={0} max={100} defaultValue={25}/></Cell>
                </Grid>
                <Grid>
                    <Cell col="3">Java<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Kotlin<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Objective-C<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Swift<Slider min={0} max={100} defaultValue={25}/></Cell>
                </Grid>
                <Grid>
                    <Cell col="3">Java<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Kotlin<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Objective-C<Slider min={0} max={100} defaultValue={25}/></Cell>
                    <Cell col="3">Swift<Slider min={0} max={100} defaultValue={25}/></Cell>
                </Grid>
            </Cell>
            <Cell col="1"/>
        </Grid>
    </div>
)

export default Skills