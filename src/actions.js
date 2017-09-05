export default function Actions(bus) {
  return {
    loadData(data) { bus.push(["loadData", data]) },
    openModal(i) { return () => bus.push(["openModal", i]) },
    closeModal() { return () => bus.push(["closeModal"]) }
  }
}
