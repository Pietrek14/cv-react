import "./Polaroid.css"

export const Polaroid = ({ caption, imageUrl, rotation }: { caption: string, imageUrl: string, rotation: number }) => {
    console.log(imageUrl)

    return <div className="polaroid flex flex-col gap-3 text-center" style={ {
        transform: `rotate(${rotation}deg)`
    } }>
        <img className="w-64" src={imageUrl} />
        <span className="caption text-black text-xl leading-0">{ caption }</span>
    </div>
}