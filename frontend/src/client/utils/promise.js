export default function promiseMiddleware(api) {
  return () => next => action => {
    const {
      nextAction,
      promise,
      type,
      ...rest
    } = action

    if (!promise) {
      return next(action)
    }

    const [REQUEST, SUCCESS, FAILURE] = type

    next({ type: REQUEST, payload: { ...rest } })

    function success(res) {
      next({ payload: { ...rest, result: res }, type: SUCCESS })
      if (nextAction) {
        nextAction(res, null)
      }
    }

    function error(err) {
      next({ payload: { ...rest, err }, type: FAILURE })
      if (nextAction) {
        nextAction(null, err)
      }
    }

    return promise(api)
      .then(success, error)
      .catch(error)
  }
}
