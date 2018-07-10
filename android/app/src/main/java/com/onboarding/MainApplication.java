package com.onboarding;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import android.app.Activity;

import java.util.Arrays;
import java.util.List;


import com.reactnativenavigation.NavigationApplication;

public class MainApplication extends NavigationApplication {
    @Override
    public String getJSMainModuleName() {
        return "index";
    }

    @Override
    public boolean clearHostOnActivityDestroy(Activity activity) {
        return false;
    }

    @Override
    public boolean isDebug() {
        // Make sure you are using BuildConfig from your own application
        return BuildConfig.DEBUG;
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }

  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
      new RNI18nPackage()
    );
  }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}

