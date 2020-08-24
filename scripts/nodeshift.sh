#!/usr/bin/env bash

DIR=$(dirname "$0")
source ${DIR}/common/logger.sh
source ${DIR}/common/util.sh

usage() {
  log-info "Usage: $(basename $0) [deploy|undeploy] <app_name>"
  exit 1
}

APP_NAME=${APP_NAME:-mfe-poc}

KSVC_NAME=$2
if [ -z "${KSVC_NAME}" ]; then
  log-info "You must specify and app name!"
  usage
fi

if [ -z "${NAMESPACE}" ]; then
  log-err "You must set NAMESPACE in you environment!
  example:
          export NAMESPACE=foobar"
  exit 1
fi

deploy() {
  log-info "nodeshift --knative=true --namespace.name=${NAMESPACE}"
  nodeshift --knative=true --namespace.name=${NAMESPACE}
  dd-oc label ksvc/${KSVC_NAME} app.kubernetes.io/part-of=${APP_NAME}
}

undeploy() {
    dd-oc delete service.serving.knative.dev/${KSVC_NAME}
}

# execute
case $1 in
  deploy)
    deploy
  ;;
  undeploy)
    undeploy
  ;;
  *)
    usage
  ;;
esac
