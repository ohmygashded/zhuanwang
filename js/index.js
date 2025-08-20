
/**
 * 点击按钮生成专网单
 */
function create() {
    let name = document.getElementById('name').value;
    let numberplate = document.getElementById('numberplate').value;
    let plate = document.getElementById('plate').value;
    let type = document.getElementById('company').value;
    let time = getDate();
    let persionSrc = '';
    let loneSrc = '';
    if (type == '个人') {
        let sum = getRandomNum(1, 9);
        persionSrc = `./img/指纹${sum}.png`

        switch (plate) {
            case '唐山济祥运输有限公司':
                loneSrc = './img/唐山.png'
                break;
            case '江苏科霖信息科技有限公司':
                loneSrc = './img/科霖.png'
                break;
            case '上海御宇电子信息科技有限公司':
                loneSrc = './img/上海.png'
                break;
        }
    } else if (type == '公司') {
        switch (name) {
            case '鄂尔多斯市安通汽车运输有限公司':
                persionSrc = './img/安通.png'
                break;
            case '内蒙古德裕隆物流有限责任公司':
                persionSrc = './img/德裕隆.png'
                break;
            case '达拉特旗东程运输有限责任公司':
                persionSrc = './img/东程.png'
                break;
            case '鄂尔多斯市航威汽车运输有限公司':
                persionSrc = './img/航威.png'
                break;
            case '内蒙古晶磊物流有限公司':
                persionSrc = './img/晶磊.png'
                break;
            case '内蒙古铭哲劳务分包有限公司':
                persionSrc = './img/铭哲.png'
                break;
            case '鄂尔多斯市瑞诚汽车租赁有限公司':
                persionSrc = './img/瑞诚.png'
                break;
            case '鄂尔多斯市易博众运输有限公司':
                persionSrc = './img/易博众.png'
                break;
            case '达拉特旗邦运物流有限公司':
                persionSrc = './img/邦运.png'
                break;
            case '鄂尔多斯市欧砾运输有限公司':
                persionSrc = './img/欧砾.png'
                break;
            case '鄂尔多斯市政恒道路运输有限责任公司':
                persionSrc = './img/鄂尔多斯市政恒道路运输有限责任公司.png'
                break;
            case '内蒙古喜宏达物流有限公司':
                persionSrc = './img/内蒙古喜宏达物流有限公司.png'
                break;
            case '内蒙古鑫路程物流有限公司':
                persionSrc = './img/内蒙古鑫路程物流有限公司.png'
                break;
            case '鄂尔多斯市辉腾运输有限公司':
                persionSrc = './img/鄂尔多斯市辉腾运输有限公司.png'
                break;
            case '准格尔旗咏珵商贸有限责任公司':
                persionSrc = './img/准格尔旗咏程.png'
                break;
            case '内蒙古荣耀能源有限公司':
                persionSrc = './img/荣耀.png'
                break;
            case '鄂尔多斯市鸿图汽车运输有限公司':
                persionSrc = './img/鸿图.png'
                break;
            default:
                alert('暂无该公司信息')
                break;
        }

        switch (plate) {
            case '唐山济祥运输有限公司':
                loneSrc = './img/唐山.png'
                break;
            case '江苏科霖信息科技有限公司':
                loneSrc = './img/科霖.png'
                break;
            case '上海御宇电子信息科技有限公司':
                loneSrc = './img/上海.png'
                break;
        }
    }

    drow(name, numberplate, plate, time, type, persionSrc, loneSrc);
    drow2(name, numberplate, plate, time, type, persionSrc, loneSrc);
}

function exportImg() {
    const canvas = document.getElementById('myCanvas');
    const canvas2 = document.getElementById('myCanvas2');

    // 创建一个新Canvas用于绘制背景颜色
    const exportCanvas = document.createElement('canvas');
    const exportCanvas2 = document.createElement('canvas');

    exportCanvas.width = canvas.width;
    exportCanvas.height = canvas.height;

    exportCanvas2.width = canvas2.width;
    exportCanvas2.height = canvas2.height;

    const exportCtx = exportCanvas.getContext('2d');
    const exportCtx2 = exportCanvas2.getContext('2d');

    // 设置背景颜色
    exportCtx.fillStyle = 'white'; // 设置为需要的背景颜色
    exportCtx.fillRect(0, 0, canvas.width, canvas.height);

    exportCtx2.fillStyle = 'white'; // 设置为需要的背景颜色
    exportCtx2.fillRect(0, 0, canvas.width, canvas.height);

    // 将原始Canvas内容绘制到新Canvas上
    exportCtx.drawImage(canvas, 0, 0);
    exportCtx2.drawImage(canvas2, 0, 0);

    // 将新Canvas转换为JPEG格式的Base64数据
    const imageDataURL = exportCanvas.toDataURL('image/jpeg');
    const imageDataURL2 = exportCanvas2.toDataURL('image/jpeg');

    let carNum = document.getElementById('numberplate').value;

    // 创建一个a标签，模拟点击下载
    const a = document.createElement('a');
    a.href = imageDataURL;
    a.download = `${carNum}.jpg`; // 下载的图片文件名
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    a.href = imageDataURL2;
    a.download = `${carNum}(2).jpg`; // 下载的图片文件名
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

/**
 * 绘制个人或公司canvas 01
 * @param {String} name 姓名
 * @param {String} carNum 车牌号
 * @param {String} loneName 平台名称
 * @param {String} time 时间
 * @param {String} type 类型
 */
function drow(name, carNum, loneName, time, type, persionSrc, loneSrc) {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // 清除整个Canvas内容
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const titleFontSize = 28; // 设置标题的字体大小
    const contentFontSize = 20; // 设置正文字体大小
    const canvasWidth = canvas.width; // 获取canvas的宽度
    const titleText = '北斗定位监控服务专网合同';

    // 绘制标题
    ctx.font = `${titleFontSize}px Arial`;
    // 获取标题文本的宽度
    const titleWidth = ctx.measureText(titleText).width;
    // 计算标题的居中位置
    const titleX = (canvasWidth - titleWidth) / 2;

    ctx.fillText(titleText, titleX, 30);

    // 绘制正文
    ctx.font = `${contentFontSize}px Arial`; // 设置正文字体样式

    // 绘制甲方和乙方
    ctx.fillText(`甲方：${name}`, 50, 70);
    ctx.fillText('（以下简称“甲方”）', 480, 70)
    ctx.beginPath();
    ctx.moveTo(100, 75);
    ctx.lineTo(470, 75);
    ctx.stroke();
    ctx.fillText(`乙方：${loneName}`, 50, 105);
    ctx.fillText('（以下简称“乙方”）', 480, 105)
    ctx.beginPath();
    ctx.moveTo(100, 110);
    ctx.lineTo(470, 110);
    ctx.stroke();

    // 绘制合作范围及实施约定
    ctx.fillText('甲乙双方在友好协商的基础上，就甲方将其车辆接入乙方平台一事，达成一致共同', 50, 170);
    ctx.fillText('遵守：', 10, 200)
    ctx.fillText('一、合作范围及实施约定', 50, 230);
    ctx.fillText(`甲方授权乙方将其车辆 ${carNum}`, 70, 265);
    ctx.fillText('，转入乙方平台。', 450, 265);
    ctx.beginPath();
    ctx.moveTo(275, 270);
    ctx.lineTo(440, 270);
    ctx.stroke();

    // 绘制合作内容及费用收取
    ctx.fillText('二、合作内容及费用收取', 50, 300);
    ctx.fillText('1.免收期：转网车辆享受转网到乙方平台后 壹 个月的服务费免收期优惠。', 70, 340);
    ctx.fillText('2.服务费收取方式：免收期过后，甲方应一次性向乙方缴纳服务费 叁佰 元，方可', 70, 375);
    ctx.fillText('出具符合国家法律、法规规定的同等金额的收费凭证。', 86, 410);
    ctx.fillText('3.终端维护：转网后的车辆，从入网之日起由乙方提供相应平台服务及终端的全国', 70, 445);
    ctx.fillText('售后联保服务，甲方予以必要协助。售后电话：19997777633。', 86, 480);

    // 绘制合作期限
    ctx.fillText('三、合作期限', 50, 510);
    ctx.fillText('本合同有效期为 壹 年，自合同签定之日起生效。', 70, 540);

    // 绘制其他
    ctx.fillText('四、其他', 50, 570);
    ctx.fillText('1.未经双方书面确认，任何一方不得变更或修改本协议，国家法律、法规另有规定', 70, 600);
    ctx.fillText('的除外。', 86, 630)
    ctx.fillText('2.不可抗力的除外。', 70, 660);

    // 绘制甲方和乙方签字及日期
    ctx.fillText('甲方:', 50, 800);

    ctx.beginPath();
    ctx.moveTo(50, 840);
    ctx.lineTo(390, 840);
    ctx.stroke();

    ctx.fillText(`${name}`, 80, 830);
    ctx.fillText('（签字）', 400, 840);

    ctx.fillText('乙方：', 50, 900);

    ctx.beginPath();
    ctx.moveTo(50, 930);
    ctx.lineTo(390, 930);
    ctx.stroke();

    ctx.fillText('（服务商盖章）', 400, 930);
    ctx.fillText(`签定日期 ${time}`, 50, 1000);

    const persionImg = new Image();
    const loneImg = new Image();

    if (type == '个人') {
        persionImg.onload = function () {
            const width = 50;
            const height = 60;
            ctx.drawImage(persionImg, 100, 800, width, height);
        }
    } else if (type == '公司') {
        persionImg.onload = function () {
            const width = 150;
            const height = 150;
            ctx.drawImage(persionImg, 200, 700, width, height);
        }
    }

    persionImg.src = persionSrc;

    loneImg.onload = function () {
        const desiredWidth = 150;
        const desiredHeight = 150;
        ctx.drawImage(loneImg, 100, 850, desiredWidth, desiredHeight);
    };
    loneImg.src = loneSrc;
}

/**
 * 车主授权书
 * @param {String} name 姓名
 * @param {String} carNum 车牌号
 * @param {String} loneName 平台名称
 * @param {String} time 时间
 * @param {String} type 类型
 */
function drow2(name, carNum, loneName, time, type, persionSrc, loneSrc) {
    if (type == '个人') {
        const canvas = document.getElementById('myCanvas2');
        const ctx = canvas.getContext('2d');

        // 清除整个Canvas内容
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const titleFontSize = 28; // 设置标题的字体大小
        const contentFontSize = 20; // 设置正文字体大小
        const canvasWidth = canvas.width; // 获取canvas的宽度
        const titleText = '车主授权书';

        // 绘制标题
        ctx.font = `${titleFontSize}px Arial`;
        // 获取标题文本的宽度
        const titleWidth = ctx.measureText(titleText).width;
        // 计算标题的居中位置
        const titleX = (canvasWidth - titleWidth) / 2;

        ctx.fillText(titleText, titleX, 30);

        // 绘制正文
        ctx.font = `${contentFontSize}px Arial`; // 设置正文字体样式

        ctx.fillText(`本人`, 50, 170);
        ctx.fillText(`${name}`, 105, 170);
        ctx.fillText(`现选择`, 260, 170)
        ctx.fillText(loneName, 330, 170);

        ctx.beginPath();
        ctx.moveTo(95, 175);
        ctx.lineTo(250, 175);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(320, 175);
        ctx.lineTo(645, 175);
        ctx.stroke();

        ctx.fillText(`作为全国货运`, 650, 170);

        // 第二行
        ctx.fillText(`平台服务商，为我名下车辆`, 10, 220);

        ctx.beginPath();
        ctx.moveTo(250, 225);
        ctx.lineTo(415, 225);
        ctx.stroke();
        ctx.fillText(carNum, 255, 220)
        ctx.fillText(`提供车载卫星定位终端安装或对接、以及`, 420, 220)
        ctx.fillText(`后续其他服务。`, 10, 270);

        // 第三行
        ctx.fillText(`1.本人名下车辆现已与原服务商合同终止并且结清了相关费用。`, 50, 315);

        // 第四行
        ctx.fillText(`2.本人名下车辆现已与原服务商无合同纠纷及经济纠纷。`, 50, 360);

        // 第五行
        ctx.fillText(`由于与原来服务商沟通专网比较困难，特授权现服务商申请全国道路货运车辆公共`, 50, 400);

        // 第六行
        ctx.fillText(`平台介入，协助尽快将车辆转入`, 10, 445);
        ctx.fillText(loneName, 305, 445);
        ctx.beginPath();
        ctx.moveTo(295, 450);
        ctx.lineTo(620, 450);
        ctx.stroke();
        ctx.fillText(`平台。`, 625, 445);

        // 车主签字
        ctx.fillText(`车主签字：`, 50, 700);
        ctx.fillText(`${name}`, 200, 700);
        ctx.beginPath();
        ctx.moveTo(150, 705);
        ctx.lineTo(400, 705);
        ctx.stroke();

        // 服务商盖章以及电话
        ctx.fillText(`服务商（盖章）：`, 50, 900);
        ctx.fillText(`服务商电话：`, 50, 940);
        ctx.beginPath();
        ctx.moveTo(220, 905);
        ctx.lineTo(400, 905);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(170, 945);
        ctx.lineTo(400, 945);
        ctx.stroke();

        ctx.fillText(`授权时间： ${time}`, 50, 1050);

        const persionImg = new Image();
        const loneImg = new Image();

        persionImg.onload = function () {
            const width = 50;
            const height = 60;
            ctx.drawImage(persionImg, 180, 650, width, height);
        }
        persionImg.src = persionSrc;

        loneImg.onload = function () {
            const desiredWidth = 150;
            const desiredHeight = 150;
            ctx.drawImage(loneImg, 100, 850, desiredWidth, desiredHeight);
        }
        loneImg.src = loneSrc;
    } else if (type == '公司') {
        const canvas = document.getElementById('myCanvas2');
        const ctx = canvas.getContext('2d');

        // 清除整个Canvas内容
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const titleFontSize = 28; // 设置标题的字体大小
        const contentFontSize = 20; // 设置正文字体大小
        const canvasWidth = canvas.width; // 获取canvas的宽度
        const titleText = '企业授权书';

        // 绘制标题
        ctx.font = `${titleFontSize}px Arial`;
        // 获取标题文本的宽度
        const titleWidth = ctx.measureText(titleText).width;
        // 计算标题的居中位置
        const titleX = (canvasWidth - titleWidth) / 2;

        ctx.fillText(titleText, titleX, 30);

        // 绘制正文
        ctx.font = `${contentFontSize}px Arial`; // 设置正文字体样式

        ctx.fillText(`本企业`, 50, 170);
        ctx.fillText(`${name}`, 130, 170);
        ctx.beginPath();
        ctx.moveTo(120, 175);
        ctx.lineTo(760, 175);
        ctx.stroke();

        ctx.fillText(`现选择`, 50, 220);
        ctx.fillText(loneName, 130, 220);
        ctx.beginPath();
        ctx.moveTo(120, 225);
        ctx.lineTo(500, 225);
        ctx.stroke();

        ctx.fillText(`作为全国货运平台服务商，为`, 510, 220);
        ctx.fillText(`我公司车辆提供北斗部标定位终端安装及后续其他服务。`, 10, 270);
        ctx.fillText(`1.本公司车辆现已与原服务商合同中止并且结清了相关费用。`, 50, 320);
        ctx.fillText(`2.本公司车辆现已与原服务商无合同纠纷及经济纠纷。`, 50, 370);
        ctx.fillText(`由于其他服务商未经我方同意强行录入我公司车辆，导致我方车辆无法正常录入，`, 50, 420);
        ctx.fillText(`特授权`, 10, 470);
        ctx.fillText(loneName, 80, 470);

        ctx.beginPath();
        ctx.moveTo(75, 475);
        ctx.lineTo(470, 475);
        ctx.stroke();

        ctx.fillText(`服务商申请全国平台介入，协助尽`, 475, 470);
        ctx.fillText(`快将车辆在其他平台删除。`, 10, 520);
        ctx.fillText(`企业章：`, 50, 670);
        ctx.fillText('企业（代表）签字：', 50, 720);
        ctx.fillText(`授权时间：${time}`, 50, 770);
        ctx.fillText('服务商盖章：________________________', 50, 920);
        ctx.fillText('服务商签字：________________________', 50, 970);
        ctx.fillText(`受理时间：${time}`, 50, 1070);

        const persionImg = new Image();
        const loneImg = new Image();

        persionImg.onload = function () {
            const width = 150;
            const height = 150;
            ctx.drawImage(persionImg, 130, 600, width, height);
        }
        persionImg.src = persionSrc;

        loneImg.onload = function () {
            const desiredWidth = 150;
            const desiredHeight = 150;
            ctx.drawImage(loneImg, 100, 850, desiredWidth, desiredHeight);
        }
        loneImg.src = loneSrc;
    }
}

/**
 * 获取当前年月日
 * @returns 年 月 日 时间戳
 */
function getDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    return year + ' 年 ' + month + ' 月 ' + day + ' 日 '
}

/**
 * 获取随机数
 * @param {int} min 
 * @param {int} max 
 * @returns 返回min ~ max之间的随机数
 */
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}