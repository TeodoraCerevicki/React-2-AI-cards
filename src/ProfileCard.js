
function ProfileCard({title, handle, image}) {
    return (
        <section>
            <img src={image} alt="ai"></img>
            <h1>{title}</h1>
            <p>{handle}</p>
        </section>
    )
}

export default ProfileCard;