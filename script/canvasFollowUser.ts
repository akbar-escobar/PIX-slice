export function canvasFollowUser() {
    const canvas = document.getElementById("canvas")
    const body = document.body

    // let scale = 1
    let touch0: { x: number, y: number }
    let touch1: { x: number, y: number }
    let el: { x: number, y: number }
    let current0: { x: number, y: number }
    let current1: { x: number, y: number }
    body.addEventListener("touchstart", (e) => {
        el = {
            x: canvas!.getBoundingClientRect().x,
            y: canvas!.getBoundingClientRect().y
        }

        touch0 = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }

        if (!e.touches[1]) return
        touch1 = {
            x: e.touches[1].clientX,
            y: e.touches[1].clientY
        }
    })

    body.addEventListener("touchmove", (e) => {
        current0 = {
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        }
        const d0 = {
            x: current0.x - touch0.x,
            y: current0.y - touch0.y
        }
        canvas!.style.left = (el.x + d0.x) + "px"
        canvas!.style.top = (el.y + d0.y) + "px"

        if (!e.touches[1]) return

        current1 = {
            x: e.touches[1].clientX,
            y: e.touches[1].clientY
        }

        const d1 = {
            x: current1.x - touch1.x,
            y: current1.y - touch1.y
        }


        // TODO mmake scale
        const gap = {
            x: d0.x - d1.x,
            y: d0.y - d1.y
        }

        // const bar = Math.sqrt(gap.x ** 2 + gap.y ** 2)

        // canvas!.style.scale=`${}`

        console.log(gap.x)
    })
}
