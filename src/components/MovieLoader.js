import React from 'react'
import ContentLoader from "react-content-loader"

function MovieLoader() {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 400 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="18" rx="2" ry="2" width="140" height="20" />
            <rect x="0" y="53" rx="2" ry="2" width="155" height="256" />
            <rect x="174" y="53" rx="2" ry="2" width="155" height="256" />
            <rect x="348" y="53" rx="2" ry="2" width="155" height="256" />
        </ContentLoader>
    )
}

export default MovieLoader