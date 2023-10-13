input.onButtonPressed(Button.A, function () {
    startbit.startbit_MP3_VOL(20)
    basic.showString("A")
    if (LANG == 1) {
        startbit.startbit_MP3_PLAY_NUM(LANG)
        basic.pause(1000)
    }
    if (LANG == 2) {
        startbit.startbit_MP3_PLAY_NUM(LANG + 1)
        basic.pause(1000)
    }
    if (LANG == 3) {
        startbit.startbit_MP3_PLAY_NUM(LANG + 2)
        basic.pause(1000)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    startbit.startbit_MP3_VOL(20)
    if (LANG >= 3) {
        LANG = 1
    } else {
        LANG += 1
    }
    if (LANG == 1) {
        basic.showString("E")
        startbit.startbit_MP3_PLAY_NUM(7)
    }
    if (LANG == 2) {
        basic.showString("M")
        startbit.startbit_MP3_PLAY_NUM(8)
    }
    if (LANG == 3) {
        basic.showString("C")
        startbit.startbit_MP3_PLAY_NUM(9)
    }
    basic.pause(1000)
})
let 计数 = 0
let 上次ID = 0
let LANG = 0
LANG = 1
let CurrentLANG = 1
startbit.startbit_Init()
wondercam.wondercam_init(wondercam.DEV_ADDR.x32)
wondercam.ChangeFunc(wondercam.Functions.Classification)
wondercam.TurnOnOrOffLed(wondercam.LED_STATE.ON)
OLED12864_I2C.init(60)
OLED12864_I2C.showString(
2,
0,
"Sky, Faith & Iana",
1
)
startbit.startbit_setBrightness(50)
OLED12864_I2C.showString(
7,
2,
"Station",
1
)
startbit.startbit_setBrightness(50)
startbit.startbit_clearLight()
basic.forever(function () {
    wondercam.UpdateResult()
    if (wondercam.MaxConfidenceID() == 上次ID) {
        计数 += 1
        if (计数 > 4) {
            if (上次ID < 2) {
            	
            } else {
                music.playTone(698, music.beat(BeatFraction.Eighth))
                if (上次ID < 5) {
                    basic.showString("H")
                    startbit.startbit_MP3_PLAY_NUM(1)
                    basic.pause(1500)
                    startbit.startbit_setPixelRGB(StartbitLights.All, StartbitRGBColors.Red)
                    startbit.startbit_setBrightness(120)
                    startbit.startbit_showLight()
                } else {
                    if (上次ID < 8) {
                        basic.showString("R")
                        startbit.startbit_MP3_PLAY_NUM(2)
                        basic.pause(1500)
                        startbit.startbit_setPixelRGB(StartbitLights.All, StartbitRGBColors.Blue)
                        startbit.startbit_setBrightness(120)
                        startbit.startbit_showLight()
                    } else {
                        if (上次ID < 11) {
                            basic.showString("F")
                            startbit.startbit_MP3_PLAY_NUM(3)
                            basic.pause(1500)
                            startbit.startbit_setPixelRGB(StartbitLights.All, StartbitRGBColors.Green)
                            startbit.startbit_setBrightness(120)
                            startbit.startbit_showLight()
                        } else {
                            basic.showString("R")
                            startbit.startbit_MP3_PLAY_NUM(4)
                            basic.pause(1500)
                            startbit.startbit_setPixelRGB(StartbitLights.All, StartbitRGBColors.White)
                            startbit.startbit_setBrightness(120)
                            startbit.startbit_showLight()
                        }
                    }
                }
                startbit.startbit_MP3_VOL(20)
                basic.pause(500)
                while (上次ID == wondercam.MaxConfidenceID()) {
                    basic.pause(100)
                    wondercam.UpdateResult()
                }
                basic.pause(2000)
                basic.pause(500)
                startbit.startbit_clearLight()
                basic.clearScreen()
            }
            上次ID = 0
            计数 = 0
        }
    } else {
        计数 = 0
    }
    上次ID = wondercam.MaxConfidenceID()
    basic.pause(100)
})
