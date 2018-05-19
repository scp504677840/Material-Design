package com.scp.translucentbars

import android.os.Bundle
import android.support.v4.content.ContextCompat
import android.support.v7.app.AppCompatActivity
import android.view.View.*

/**
 * 与Toolbar交互
 * 注意：
 * 1.当隐藏状态栏时，Toolbar会上移至StatusBar状态栏与之重叠。
 * 2.解决此问题只需设置Activity根View的android:fitsSystemWindows="true"即可。
 * 3.此时问题还没有得到根本的解决，我们知道android:fitsSystemWindows="true"实质是将根View设置了padding属性，
 * 那么空出来的空间就是空白，背景颜色继承自根布局。显然是不合适的。于是我们需要设置顶部状态栏和底部导航栏的颜色：
 * window.statusBarColor = ContextCompat.getColor(this, R.color.colorAccent)
 * window.navigationBarColor = ContextCompat.getColor(this, R.color.colorAccent)
 * 至此，也算是基本完成了透明状态栏与Toolbar的交互。
 */
class AppBarActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_app_bar)

        //上面的注意1
        val decorView = window.decorView
        val option = SYSTEM_UI_FLAG_HIDE_NAVIGATION or
                SYSTEM_UI_FLAG_IMMERSIVE_STICKY or
                SYSTEM_UI_FLAG_LAYOUT_STABLE or
                SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN or
                SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
        decorView.systemUiVisibility = option
        //上面的注意3
        window.statusBarColor = ContextCompat.getColor(this, R.color.colorAccent)
        window.navigationBarColor = ContextCompat.getColor(this, R.color.colorAccent)

    }

}