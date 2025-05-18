const Task = require("../models/task");

const registerTask = async (req, res) => {
  //CREATE
  const { title, description, completed, category, priority, dueDate } =
    req.body;

  console.log(req.user);

  try {
    const newTask = new Task({
      title,
      description,
      category,
      priority,
      completed: completed === "true" || completed === true ? true : false,
      dueDate,
      user: req.user.id,
    });

    await newTask.save();

    res.status(201).json({ message: "Nova tarefa registrada com sucesso!" });
  } catch (error) {
    console.error("Erro no registro da nova tarefa", error);
    res.status(500).json({ message: "Erro ao registrar nova tarefa" });
  }
};

const getTask = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const [tasks, totalTasks] = await Promise.all([
      Task.find({ user: req.user.id }).skip(skip).limit(limit),
      Task.countDocuments({ user: req.user.id }),
    ]);

    const totalPages = Math.ceil(totalTasks / limit);

    if (tasks.length === 0) {
      return res.status(200).json({
        message: "Esse usuário não tem nenhuma tarefa registrada!",
      });
    }

    res.status(200).json({
      page,
      totalPages,
      totalTasks,
      tarefas: tasks,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao tentar encontrar tarefas" });
  }
};

const getTaskByName = async (req, res) => {
  //READ BY ID
  const { name } = req.params;

  try {
    const task = await Task.findOne({ title: name });

    if (!task) {
      return res.status(200).json({ message: "Não há task com esse titulo" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao tentar encontrar Tarefa" });
  }
};

const updateTask = async (req, res) => {
  //UPDATE
  const { title, description, category, priority, completed, dueDate } =
    req.body;
  const { id } = req.params;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: id, user: req.user.id },
      { title, description, category, priority, completed, dueDate },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res
        .status(404)
        .json({ message: "Tarefa não encontrada ou não pertence ao usuario!" });
    }

    res.status(200).json({ message: "Tarefa atualizada com sucesso" }, task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
};

const deleteTask = async (req, res) => {
  //DELETE
  const { id } = req.params;

  try {
    const removedTask = await Task.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!removedTask) {
      return res
        .status(404)
        .json({ message: "Tarefa não encontrada ou não pertence ao usuario!" });
    }

    res.status(200).json({ message: "Tarefa deletada com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor." });
  }
};

module.exports = {
  registerTask,
  getTask,
  getTaskByName,
  updateTask,
  deleteTask,
};
