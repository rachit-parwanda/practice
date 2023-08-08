const ConditionalRenderer = ({
  isLoading,
  errorMsg,
  noDataState,
  children,
}) => {
  if (isLoading) {
    return "Loading...";
  } else if (errorMsg) {
    return errorMsg;
  } else if (noDataState) {
    return "No products to show";
  }

  return children;
};

export default ConditionalRenderer;
