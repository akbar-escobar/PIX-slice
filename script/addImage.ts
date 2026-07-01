export function addImage() {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const ctx = canvas.getContext("2d")
    const addImage = document.getElementById("add-image") as HTMLInputElement

    addImage?.addEventListener("change", () => {
        if (!addImage.files) return
        const fileImg = addImage.files[0]

        const img = new Image()
        img.src = URL.createObjectURL(fileImg)

        canvas.width = img.width
        canvas.height = img.height

        img.onload = () => {
            ctx?.drawImage(
                img,
                0, 0,
                img.width, img.height,
                0, 0,
                img.width, img.height
            )
        }
    })

    // placeholder
    const img = new Image()
    img.src = "/zombie.png"

    canvas.width = img.width
    canvas.height = img.height

    img.onload = () => {
        ctx?.drawImage(
            img,
            0, 0,
            img.width, img.height,
            0, 0,
            img.width, img.height
        )
    }
}
