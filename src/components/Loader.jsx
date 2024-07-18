import React, { useState, useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = () => {

    return (
        <>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div style={{
                    display: 'block',
                    lineHeight: 2,
                    marginBottom: '1%',
                    marginTop: '0.5rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '73%',
                }}>
                    <Skeleton
                        count={1}
                        height={150}
                        duration={2.5}
                    />
                </div>
            </SkeletonTheme>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div style={{
                    lineHeight: 3,
                    marginBottom: '2%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '73%',
                }}>
                    <Skeleton
                        count={15}
                        height={30}
                        duration={2.5}
                    />
                </div>
            </SkeletonTheme>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p style={{
                    display: 'block',
                    lineHeight: 2,
                    marginBottom: '0.5rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '73%',
                }}>
                    <Skeleton
                        count={3}
                        height={70}
                        duration={2.5}
                    />
                </p>
            </SkeletonTheme>
        </>
    )
}

export default Loader;