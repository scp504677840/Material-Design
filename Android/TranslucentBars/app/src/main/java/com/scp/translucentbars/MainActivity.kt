package com.scp.translucentbars

import android.graphics.Color
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.View.*
import kotlinx.android.synthetic.main.activity_main.*


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        //初始化View
        initView()
    }

    /**
     * 初始化View
     */
    private fun initView() {

        //在原生机器是不透明的，在有些机器上是透明的。
        //方案一，三星S7不可行
        /*window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
        window.statusBarColor = Color.TRANSPARENT

        val cv :ViewGroup = findViewById(Window.ID_ANDROID_CONTENT)
        val childView = cv.getChildAt(0)
        if (childView!=null){
            //ViewCompat.setFitsSystemWindows(childView,false)
            cv.fitsSystemWindows = false
        }*/

        //方案二，三星S7不可行
        /*window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS or WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION)
        window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
        window.statusBarColor = Color.TRANSPARENT
        window.addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)*/

        /*
        //调暗状态栏和导航栏，任意的View交互动作该Flag会被清除。
        SYSTEM_UI_FLAG_LOW_PROFILE
        //隐藏导航栏
        SYSTEM_UI_FLAG_HIDE_NAVIGATION
        //全屏，任意的View交互动作该Flag会被清除。
        SYSTEM_UI_FLAG_FULLSCREEN
        SYSTEM_UI_FLAG_LAYOUT_STABLE
        SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
        SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
        SYSTEM_UI_FLAG_IMMERSIVE
        SYSTEM_UI_FLAG_IMMERSIVE_STICKY
         */
        //方案三，三星S7可行
        /*val decorView = window.decorView
        val option = SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or SYSTEM_UI_FLAG_LAYOUT_STABLE
        decorView.systemUiVisibility = option
        window.statusBarColor = Color.TRANSPARENT*/

        //方案四，三星S7可行
        /*val decorView = window.decorView
        val option = SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
        decorView.systemUiVisibility = option*/

        //方案五，三星S7可行
        val decorView = window.decorView
        //
        /*val option = SYSTEM_UI_FLAG_LAYOUT_STABLE or
                SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or
                SYSTEM_UI_FLAG_HIDE_NAVIGATION or
                SYSTEM_UI_FLAG_IMMERSIVE_STICKY*/

        //系统UI隐藏导航栏，状态栏透明
        val option = SYSTEM_UI_FLAG_HIDE_NAVIGATION or
                SYSTEM_UI_FLAG_IMMERSIVE_STICKY or
                SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or
                SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                SYSTEM_UI_FLAG_LAYOUT_STABLE
        decorView.systemUiVisibility = option
        window.statusBarColor = Color.TRANSPARENT

        //方案六，全屏模式，三星S7可行
        /*val decorView = window.decorView
        val option = SYSTEM_UI_FLAG_LAYOUT_STABLE or
                SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION or
                SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or
                SYSTEM_UI_FLAG_HIDE_NAVIGATION or
                SYSTEM_UI_FLAG_FULLSCREEN or
                SYSTEM_UI_FLAG_IMMERSIVE_STICKY
        decorView.systemUiVisibility = option*/

        main_iv.setOnClickListener { window.statusBarColor = if (window.statusBarColor == Color.TRANSPARENT) Color.RED else Color.TRANSPARENT }

    }
}
