import React, { useEffect } from 'react';
import { Loader } from './Components/Loader'
import { connect } from 'react-redux'
import { setLoading } from './StateApp/Actions'
import Home from './Containers'

function App({setLoading, loading}) {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, []);

  return (
    loading ? <Loader /> : <Home />
  );
}

const mapStateToProps = (store) => (
  {
    loading: store.loading
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    setLoading: (val) => dispatch(setLoading(val))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
