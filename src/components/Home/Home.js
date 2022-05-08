import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from '@material-ui/core'

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

import { getPosts } from '../../actions/posts'
import { useDispatch } from 'react-redux'

const Home = () => {
    const [currentID, setCurrentID] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch, currentID])

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7} >
                        <Posts setCurrentID={setCurrentID} />
                    </Grid>

                    <Grid item xs={12} sm={4} >
                        <Form currentID={currentID} setCurrentID={setCurrentID} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home