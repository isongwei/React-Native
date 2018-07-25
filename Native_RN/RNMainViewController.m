

//
//  RNMainViewController.m
//  Native_RN
//
//  Created by Song on 2018/5/17.
//  Copyright © 2018年 Song. All rights reserved.
//

#import "RNMainViewController.h"
#import "RNView.h"


#import <React/RCTBridgeModule.h>

@interface RNMainViewController ()<RCTBridgeModule>

@end

@implementation RNMainViewController



- (void)viewDidLoad {
    
    [super viewDidLoad];
    self.title = @"RN模块首页";
    RNView * rnView = [[RNView alloc] initWithFrame:self.view.bounds];
    self.view = rnView;
    
}


RCT_EXPORT_MODULE(RNMainViewController)

RCT_EXPORT_METHOD(name:(NSString *)name){
    
    printf("%s", [name UTF8String]);
    
}





@end
