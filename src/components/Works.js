/**
 * Created by haradakazumi on 2017/06/10.
 */
import React, { PropTypes } from 'react'
import WorkCard from "../components/WorkCard"
import Style from "../style.css"

const Works = ({works,showDialog,hideDialog}) => {

    console.log(works);

    return (
        <section>
            <h4>Works</h4>

            <div style={Style.work_base}>
                <ul style={Style.works}>
                    {works.map((work) =>
                        <li style={Style.work_item}>
                            <WorkCard url={work.image_url} title={work.title} description={work.description} workId={work.id} showDialog={() => showDialog(work.id)} hideDialog={() => hideDialog(work.id)} active={work.visible}/>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    )
};


Works.propTypes = {
    works: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    showDialog: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired
}


export default Works
