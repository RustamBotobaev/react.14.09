import React from 'react'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const About = () => {
    const history = useHistory();
    
    return (
        <div>
            <Layout>
                <h1>About Page</h1>
                <button type="button" onClick={() => history.goBack()}>
                    go back
                </button>
            </Layout>
        </div>
    )
}

export default About
