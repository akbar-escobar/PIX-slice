export function menu() {
    const menu = document.getElementById("menu")
    const menuBtn = document.getElementById("menu-btn")

    let isClick = false
    menuBtn?.addEventListener("click", () => {
        isClick = !isClick
        menu!.style.display = isClick ? "flex" : "none"
    })
}
