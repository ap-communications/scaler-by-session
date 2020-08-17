.PHONY: setup
setup:
	helm repo add stable https://kubernetes-charts.storage.googleapis.com/
	helm repo update 

.PHONY: install
install: metrics-server
	helm install prometheus stable/prometheus \
		--namespace prometheus \
		--create-namespace \
		--set alertmanager.persistentVolume.storageClass="gp2",server.persistentVolume.storageClass="gp2"	
	helm install prometheus-adapter stable/prometheus-adapter \
		--set prometheus.url='http://prometheus.prometheus.svc'

.PHONY: metrics-server
metrics-server:
	kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/download/v0.3.6/components.yaml
