//
//  RNView.m
//  Native_RN
//
//  Created by Song on 2018/5/17.
//  Copyright © 2018年 Song. All rights reserved.
//

#import "RNView.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>


@implementation RNView


-(instancetype)initWithFrame:(CGRect)frame{
    
    if (self = [super initWithFrame:frame]) {
#if TARGET_IPHONE_SIMULATOR
        [[RCTBundleURLProvider sharedSettings] setJsLocation:@"localhost"];
#else
        [[RCTBundleURLProvider sharedSettings] setDefaults];
#endif
        
        
        NSURL *jsCodeLocation;
#if DEBUG
        jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];
#else
        jsCodeLocation = [NSURL URLWithString:[[NSBundle mainBundle] pathForResource:@"index.ios.jsbundle" ofType:nil]];
#endif
        
        RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"test"
                                                     initialProperties:nil
                                                         launchOptions:nil];
        
        [self addSubview:rootView];
        rootView.frame = self.bounds;
    }
    return self;
    
}


@end
