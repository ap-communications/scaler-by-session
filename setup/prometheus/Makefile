.PHONY: setup
setup:
	helm repo add stable https://kubernetes-charts.storage.googleapis.com/
	helm repo update 

.PHONY: install
install:
	helm install prometheus stable/prometheus \
		--namespace prometheus \
		--create-namespace \
		--set alertmanager.persistentVolume.storageClass="gp2",server.persistentVolume.storageClass="gp2"	
	helm install prometheus-adapter stable/prometheus-adapter \
		--set prometheus.url='http://prometheus.prometheus.svc'