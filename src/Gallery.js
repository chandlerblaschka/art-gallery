function Gallery(props) {
    return (
        <div style={{ 'width': '100%' }}>
            <img src={props.objectImg} alt={props.title} />
            <h3>{props.artist}</h3>
            <h5>{props.title}</h5>
        </div>
    )
}


export default Gallery