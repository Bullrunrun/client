/*音乐播放和暂停*/
// 获取 Music 图片元素
const musicImg = document.getElementById('Music');
// 创建一个音频对象
const music = new Audio('path/to/music/file.mp3');
// 在 DOM 加载完成后，立即播放音乐
document.addEventListener('DOMContentLoaded', function () {
    music.play();
});

// 为 Music 图片添加点击事件
musicImg.addEventListener('click', function () {
    // 如果当前显示的是 MenuImg\Music.png，切换为 MenuImg\Music1.png
    if (musicImg.src.includes('MenuImg/Music.png')) {
        musicImg.src = 'MenuImg/Music1.png';  // 切换为静音图标
        music.pause();  // 暂停音乐
    } else {
        musicImg.src = 'MenuImg/Music.png';  // 切换回音乐图标
        music.play();  // 播放音乐
    }
});

/*跳转到Home*/
document.getElementById('Home').addEventListener('click', function () {
    window.location.href = 'AOUI_Home.html'; // 跳转到 AOUI_Home 页面
});

/*链接钱包操作 */

/*跳转到Play */
document.getElementById('Play').addEventListener('click', function () {
    window.location.href = 'AOUI_Play.html'; // 跳转到 AOUI_Play 页面
});





