CLUSTER_NAME := scale-session
NODE_MIN := 3
NODE_MAX := 6
NODE_TYPE := t3.medium
K8S_VERSION := 1.16

.PHONY: clreate-cluster
create-cluster:
	eksctl create cluster \
  	--name=$(CLUSTER_NAME) \
  	--version $(K8S_VERSION) \
  	--managed \
  	--asg-access \
  	--nodes-min $(NODE_MIN) \
  	--nodes-max $(NODE_MAX) \
  	--node-type $(NODE_TYPE)

.PHONY: auto-scaler
auto-scaler:
	kubectl apply -f https://raw.githubusercontent.com/kubernetes/autoscaler/master/cluster-autoscaler/cloudprovider/aws/examples/cluster-autoscaler-autodiscover.yaml
	kubectl -n kube-system annotate deployment.apps/cluster-autoscaler cluster-autoscaler.kubernetes.io/safe-to-evict="false"
	@echo ################################################
	@echo ################################################
	@echo see https://docs.aws.amazon.com/ja_jp/eks/latest/userguide/cluster-autoscaler.html#ca-deploy
	@echo execute
	@echo kubectl -n kube-system edit deployment.apps/cluster-autoscaler
	@echo and update for some option
	@echo and execute below
	@echo kubectl -n kube-system set image deployment.apps/cluster-autoscaler cluster-autoscaler=asia.gcr.io/k8s-artifacts-prod/autoscaling/cluster-autoscaler:v1.19.0

.PHONY: delete-cluster
delete-cluster:
	eksctl delete cluster --name=$(CLUSTER_NAME)
