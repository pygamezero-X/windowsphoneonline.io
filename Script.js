// 这里可以添加一些点击事件等交互逻辑
const tiles = document.querySelectorAll('.tile');
tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        console.log('Tile clicked!');
    });
});
