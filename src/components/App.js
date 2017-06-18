import React from 'react'
import Layout from "react-toolbox/lib/layout/Layout"
import Panel from "react-toolbox/lib/layout/Panel"
import Grid from "react-mdl/lib/Grid/Grid"
import Cell from "react-mdl/lib/Grid/Cell"

import Header from '../components/Header'
import Main from '../components/Main'
import AboutMe from '../components/AboutMe'
import LatestPosts from '../components/LatestPosts'
import Skills from '../components/Skills'
import Works from '../components/Works'
import Footer from '../components/Footer'

//import Layout from '../components/Layout'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'
// import Footer from './Footer'
//
// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// )

const App = () => (
    <Layout>
        <Panel>
            <Header />
            <Main/>
            <Grid>
                <Cell col="8"><AboutMe/></Cell>
                <Cell col="4"><LatestPosts/></Cell>
            </Grid>
            <Grid>
                <Cell col="12"><Skills/></Cell>
            </Grid>
            <Grid>
                <Cell col="12"><Works/></Cell>
            </Grid>
            <Footer/>
        </Panel>
    </Layout>
);


export default App
