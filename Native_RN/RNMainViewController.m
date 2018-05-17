

//
//  RNMainViewController.m
//  Native_RN
//
//  Created by Song on 2018/5/17.
//  Copyright © 2018年 Song. All rights reserved.
//

#import "RNMainViewController.h"
#import "RNView.h"

@interface RNMainViewController ()

@end

@implementation RNMainViewController

- (void)viewDidLoad {
    
    [super viewDidLoad];
    self.title = @"RN模块首页";
    RNView * rnView = [[RNView alloc] initWithFrame:self.view.bounds];
    self.view = rnView;
    
}


@end
