+++
title = "Step FunctionsのログをCloudWatch Logsに残す"
date = "2021-04-11"
tags = ["Step Functions", "CloudWatch Logs"]
+++

Step Functionsのステートマシーンの実行ログをCloudWatch Logsに投入する仕組み。

こうした設定をしない場合、ステートマシーンの実行ログはAWSコンソールのステートマシーンのページで確認することになるが、CloudWatch Logsにログを残す方がいい場合も多いのではないかと考えてその設定を作ってみた。

[CDKのコード](https://github.com/suzukiken/cdkstepfunctions-log)

![img](/img/2021/04/stepfunctions-log-stepmachine.png)

![img](/img/2021/04/stepfunctions-log-cloudwatchlogs.png)

タイムアウトや失敗だけをログに残すこともできる。



