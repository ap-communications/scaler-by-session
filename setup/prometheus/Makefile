.PHONY: setup
setup:
	helm repo add stable https://kubernetes-charts.storage.googleapis.com/
	helm repo update 


.PHONY: install-all
install-all: install-server install-adapter

.PHONY: install-server
install: metrics-server
	helm upgrade --install prometheus stable/prometheus \
		--namespace prometheus \
		--create-namespace \
		--set alertmanager.persistentVolume.storageClass="gp2",server.persistentVolume.storageClass="gp2"	

.PHONE: install-adapter
install-adapter:
	helm upgrade --install \
			-f adapter-config.yaml \
			prometheus-adapter stable/prometheus-adapter
