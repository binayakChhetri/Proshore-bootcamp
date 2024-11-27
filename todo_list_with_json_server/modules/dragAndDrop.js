const container = document.querySelector(".todo-lists");
export const dragAndDrop = () => {
  const draggables = document.querySelectorAll(".draggable");

  draggables.forEach((draggable) => {
    // dragstart
    // When the user starts dragging an element
    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
    });
  });

  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement.element);
    }
  });
};

function getDragAfterElement(container, y) {
  // This will get every draggable element that is not being dragged
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    {
      offset: Number.NEGATIVE_INFINITY,
    }
  );
}
