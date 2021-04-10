import * as cdk from "@aws-cdk/core";
import * as sfn from "@aws-cdk/aws-stepfunctions";
import * as logs from "@aws-cdk/aws-logs";

export class CdkstepfunctionsLogStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const PREFIX_NAME = id.toLowerCase().replace("stack", "")
    
    // log
    
    const log_group = new logs.LogGroup(this, 'log_group', {
      retention: logs.RetentionDays.ONE_WEEK,
      logGroupName: '/aws/states/' + PREFIX_NAME + '-log'
    })

    // state machine
    
    const wait_task = new sfn.Wait(this, "wait_task", {
      time: sfn.WaitTime.duration(cdk.Duration.seconds(5)),
    })
    
    const definition = wait_task

    const state_machine = new sfn.StateMachine(this, "state_machine", {
      definition,
      timeout: cdk.Duration.seconds(10),
      stateMachineName: PREFIX_NAME + "-statemachine",
      logs: {
        destination: log_group,
        level: sfn.LogLevel.ALL
      }
    })

  }
}
