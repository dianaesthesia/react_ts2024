import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {postActions} from "../../redux/slices/postSlice";

const ChosenPostComponent = () => {
    const {id} = useParams();

    const post = useAppSelector(state => state.postSliceState.post);

    const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) {
            dispatch(postActions.loadPostById(id));
        } else {
            throw new Error('id is undefined')
        }
    }, [id]);

    return (
        <div>
            {post &&
                <div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>}
        </div>
    );
};

export default ChosenPostComponent;