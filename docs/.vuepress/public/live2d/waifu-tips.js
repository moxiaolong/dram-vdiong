/*
 * Live2D Widget
 * https://github.com/stevenjoezhang/live2d-widget
 * //at.alicdn.com/t/font_1879460_ajxs43pbfyc.css
 */

function loadWidget(config) {
    let {waifuPath, apiPath, cdnPath} = config;
    let useCDN = false, modelList;
    if (typeof cdnPath === "string") {
        useCDN = true;
        if (!cdnPath.endsWith("/")) cdnPath += "/";
    }
    if (!apiPath.endsWith("/")) apiPath += "/";
    localStorage.setItem("waifu-display", Date.now());
    sessionStorage.removeItem("waifu-text");

// <!--				<span class="fa fa-lg fa-user-circle"></span>-->
    document.body.insertAdjacentHTML("beforeend", `<div id="waifu">
			<div id="waifu-tips"></div>
			<canvas id="live2d" width="240" height="240"></canvas>
			<div id="waifu-tool">
				<span class="iconfont icon-guanbi"></span>
				<span class="iconfont icon-huanfu"></span>
				<span class="iconfont icon-feiji"></span>
				
			</div>
		</div>`);
    // https://stackoverflow.com/questions/24148403/trigger-css-transition-on-appended-elementc
    setTimeout(() => {
        document.getElementById("waifu").style.bottom = '-12px';
    }, 0);

    function randomSelection(obj) {
        return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
    }

    // 检测用户活动状态，并在空闲时显示消息
    let userAction = false,
        userActionTimer,
        messageTimer,
        messageArray = ["好久不见，日子过得好快呢……", "大坏蛋！你都多久没理人家了呀，嘤嘤嘤～", "嗨～快来逗我玩吧！", "拿小拳拳锤你胸口！", "记得把小家加入 Adblock 白名单哦！"];
    window.addEventListener("mousemove", () => userAction = true);
    window.addEventListener("keydown", () => userAction = true);
    setInterval(() => {
        if (userAction) {
            userAction = false;
            clearInterval(userActionTimer);
            userActionTimer = null;
        } else if (!userActionTimer) {
            userActionTimer = setInterval(() => {
                showMessage(randomSelection(messageArray), 6000, 9);
            }, 20000);
        }
    }, 1000);

    (function registerEventListener() {
        // t.querySelector("#waifu-tool .fa-comment").addEventListener("click", showHitokoto);
        document.querySelector("#waifu-tool .icon-feiji").addEventListener("click", () => {
            if (window.Asteroids) {
                if (!window.ASTEROIDSPLAYERS) window.ASTEROIDSPLAYERS = [];
                window.ASTEROIDSPLAYERS.push(new Asteroids());
            } else {
                let script = document.createElement("script");
                script.src = "https://cdn.jsdelivr.net/gh/GalaxyMimi/CDN/asteroids.js";
                document.head.appendChild(script);
            }
        });
        // document.querySelector("#waifu-tool .fa-user-circle").addEventListener("click", loadOtherModel);
        document.querySelector("#waifu-tool .icon-huanfu").addEventListener("click", loadRandModel);
        // t.querySelector("#waifu-tool .fa-camera-retro").addEventListener("click", () => {
        // 	showMessage("照好了嘛，是不是很可爱呢？", 6000, 9);
        // 	Live2D.captureName = "photo.png";
        // 	Live2D.captureFrame = true;
        // });
        // t.querySelector("#waifu-tool .fa-info-circle").addEventListener("click", () => {
        // 	open("https://github.com/stevenjoezhang/live2d-widget");
        // });
        document.querySelector("#waifu-tool .icon-guanbi").addEventListener("click", () => {
            localStorage.removeItem("waifu-display");
            showMessage("愿你有一天能与重要的人重逢。", 2000, 11);
            document.getElementById("waifu").style.bottom = "-500px";
            setTimeout(() => {
                document.getElementById("waifu").style.display = "none";
                let toggle = document.getElementById("waifu-toggle");
                toggle.style.display = "block";
                setTimeout(() => {
                    toggle.style.opacity = "1";
                }, 100);

            }, 3000);
        });
        let devtools = () => {
        };
        console.log("%c", devtools);
        devtools.toString = () => {
            showMessage("哈哈，你打开了控制台，是想要看看我的小秘密吗？", 6000, 9);
        };
        window.addEventListener("copy", () => {
            showMessage("你都复制了些什么呀，转载要记得加上出处哦！", 6000, 9);
        });
        window.addEventListener("visibilitychange", () => {
            if (!document.hidden) showMessage("哇，你终于回来了～", 6000, 9);
        });
    })();

    (function welcomeMessage() {
        let text;
        if (location.pathname === "/") { // 如果是主页
            let now = new Date().getHours();
            if (now > 5 && now <= 7) text = "早上好！一日之计在于晨，美好的一天就要开始了。";
            else if (now > 7 && now <= 11) text = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！";
            else if (now > 11 && now <= 13) text = "中午了，工作了一个上午，现在是午餐时间！";
            else if (now > 13 && now <= 17) text = "午后很容易犯困呢，今天的运动目标完成了吗？";
            else if (now > 17 && now <= 19) text = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红～";
            else if (now > 19 && now <= 21) text = "晚上好，今天过得怎么样？";
            else if (now > 21 && now <= 23) text = ["已经这么晚了呀，早点休息吧，晚安～", "深夜时要爱护眼睛呀！"];
            else text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？";
        } else if (document.referrer !== "") {
            let referrer = new URL(document.referrer),
                domain = referrer.hostname.split(".")[1];
            if (location.hostname === referrer.hostname) text = `欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
            else if (domain === "baidu") text = `Hello！来自 百度搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&wd=")[1].split("&")[0]}</span> 找到的我吗？`;
            else if (domain === "so") text = `Hello！来自 360搜索 的朋友<br>你是搜索 <span>${referrer.search.split("&q=")[1].split("&")[0]}</span> 找到的我吗？`;
            else if (domain === "google") text = `Hello！来自 谷歌搜索 的朋友<br>欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
            else text = `Hello！来自 <span>${referrer.hostname}</span> 的朋友`;
        } else {
            text = `欢迎阅读<span>「${document.title.split(" - ")[0]}」</span>`;
        }
        showMessage(text, 7000, 8);
    })();

    function showHitokoto() {
        // 增加 hitokoto.cn 的 API
        fetch("https://v1.hitokoto.cn")
            .then(response => response.json())
            .then(result => {
                let text = `这句一言来自 <span>「${result.from}」</span>，是 <span>${result.creator}</span> 在 hitokoto.cn 投稿的。`;
                showMessage(result.hitokoto, 6000, 9);
                setTimeout(() => {
                    showMessage(text, 4000, 9);
                }, 6000);
            });
    }


    function showMessage(text, timeout, priority) {
        if (!text || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority)) return;
        if (messageTimer) {
            clearTimeout(messageTimer);
            messageTimer = null;
        }
        text = randomSelection(text);
        sessionStorage.setItem("waifu-text", priority);
        let tips = document.getElementById("waifu-tips");
        tips.innerHTML = text;
        tips.classList.add("waifu-tips-active");
        messageTimer = setTimeout(() => {
            sessionStorage.removeItem("waifu-text");
            tips.classList.remove("waifu-tips-active");
        }, timeout);
    }

    (function initModel() {
        let modelId = localStorage.getItem("modelId"),
            modelTexturesId = localStorage.getItem("modelTexturesId");
        if (modelId === null) {
            // 首次访问加载 指定模型 的 指定材质
            modelId = 1; // 模型 ID
            modelTexturesId = 48; // 材质 ID
        }
        loadModel(modelId, modelTexturesId);
        fetch(waifuPath)
            .then(response => response.json())
            .then(result => {

                result.mouseover.forEach(tips => {
                    window.addEventListener("mouseover", event => {
                        if (!event.target.matches(tips.selector)) return;
                        let text = randomSelection(tips.text);
                        text = text.replace("{text}", event.target.innerText);
                        showMessage(text, 4000, 8);
                    });
                });
                result.click.forEach(tips => {
                    window.addEventListener("click", event => {
                        if (!event.target.matches(tips.selector)) return;
                        let text = randomSelection(tips.text);
                        text = text.replace("{text}", event.target.innerText);
                        showMessage(text, 4000, 8);
                    });
                });
                result.seasons.forEach(tips => {
                    let now = new Date(),
                        after = tips.date.split("-")[0],
                        before = tips.date.split("-")[1] || after;
                    if ((after.split("/")[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split("/")[0]) && (after.split("/")[1] <= now.getDate() && now.getDate() <= before.split("/")[1])) {
                        let text = randomSelection(tips.text);
                        text = text.replace("{year}", now.getFullYear());
                        //showMessage(text, 7000, true);
                        messageArray.push(text);
                    }
                });
            });
    })();

    async function loadModelList() {
        let response = await fetch(`${cdnPath}model_list.json`);
        let result = await response.json();
        modelList = result;
    }

    async function loadModel(modelId, modelTexturesId, message) {
        localStorage.setItem("modelId", modelId);
        localStorage.setItem("modelTexturesId", modelTexturesId);
        showMessage(message, 4000, 10);
        if (useCDN) {
            if (!modelList) await loadModelList();
            let target = randomSelection(modelList.models[modelId]);
            loadlive2d("live2d", `${cdnPath}model/${target}/index.json`);
        } else {
            loadlive2d("live2d", `${apiPath}get/?id=${modelId}-${modelTexturesId}`);
            console.log(`Live2D 模型 ${modelId}-${modelTexturesId} 加载完成`);
        }
    }

    async function loadRandModel() {
        let modelId = localStorage.getItem("modelId"),
            modelTexturesId = localStorage.getItem("modelTexturesId");
        if (useCDN) {
            if (!modelList) await loadModelList();
            let target = randomSelection(modelList.models[modelId]);
            loadlive2d("live2dold", `${cdnPath}model/${target}/index.json`);
            showMessage("我的新衣服好看嘛？", 4000, 10);
        } else {
            // 可选 "rand"(随机), "switch"(顺序)
            fetch(`${apiPath}rand_textures/?id=${modelId}-${modelTexturesId}`)
                .then(response => response.json())
                .then(result => {
                    if (result.textures.id === 1 && (modelTexturesId === 1 || modelTexturesId === 0)) showMessage("我还没有其他衣服呢！", 4000, 10);
                    else loadModel(modelId, result.textures.id, "我的新衣服好看嘛？");
                });
        }
    }

    // async function loadOtherModel() {
    //     let modelId = localStorage.getItem("modelId");
    //     if (useCDN) {
    //         if (!modelList) await loadModelList();
    //         let index = (++modelId >= modelList.models.length) ? 0 : modelId;
    //         loadModel(index, 0, modelList.messages[index]);
    //     } else {
    //         fetch(`${apiPath}switch/?id=${modelId}`)
    //             .then(response => response.json())
    //             .then(result => {
    //                 loadModel(result.model.id, 0, result.model.message);
    //             });
    //     }
    // }
}

function initWidget(config, apiPath = "/") {
    if (typeof config === "string") {
        config = {
            waifuPath: config,
            apiPath
        };
    }
    //style="opacity: 0;display: none;"
    document.getElementsByClassName("theme-mode-but")[0].insertAdjacentHTML(
        "beforeBegin", `<div style="display: none;opacity: 0" title="看板娘" id="waifu-toggle" class="button blur iconfont icon-nv">
			
		</div>`
    );
// t.body.insertAdjacentHTML("beforeend", `<div id="waifu-toggle">
// 		<span>看板娘</span>
// 	</div>`);
    let toggle = document.getElementById("waifu-toggle");
    toggle.addEventListener("click", () => {
        localStorage.setItem("waifu-display", Date.now());
        toggle.style.opacity = '0';
        setTimeout(() => {
            toggle.style.display = "none";
        }, 500)
        // toggle.classList.remove("waifu-toggle-active");
        if (toggle.getAttribute("first-time")) {
            loadWidget(config);
            toggle.removeAttribute("first-time");
        } else {
            document.getElementById("waifu").style.display = "";
            setTimeout(() => {
                document.getElementById("waifu").style.bottom = '-12px';
            }, 0);
        }
    });

    //是否关闭
    if (localStorage.getItem("waifu-display") == null) {
        //是

        toggle.setAttribute("first-time", true);
        setTimeout(() => {
            toggle.style.display = "block";
            toggle.style.opacity = "1";
        }, 0);
    } else {
        loadWidget(config);

    }
}



