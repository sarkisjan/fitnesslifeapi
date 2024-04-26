import express from 'express';
import { Exercises } from '../exercisesData/Exercises.js';


const router = express.Router();
// all routes in here starts with '/'
router.get('/', (req, res) => {
    // res.send('hello from exercises');
    res.send(Exercises);
});
router.get('/bodyPartList', (req, res) => {
    const bodyParts = [];
    Exercises.map(exercise => {
        bodyParts.indexOf(exercise.bodyPart) === -1 && bodyParts.push(exercise.bodyPart);
        
    });
    res.send(bodyParts);
    // res.send('hello from exercises/bodyPartList');
});
router.get('/equipmentList', (req, res) => {
    const equipments = [];
    Exercises.map(exercise => {
        equipments.indexOf(exercise.equipment) === -1 && equipments.push(exercise.equipment);
        
    });
    res.send(equipments);
    // res.send('hello from exercises/equipmentList');
});
router.get('/primaryMusclesList', (req, res) => {
    const primaryMuscles = [];
    Exercises.map(exercise => {
        primaryMuscles.indexOf(exercise.primaryMuscles) === -1 && primaryMuscles.push(exercise.primaryMuscles);
        
    });
    res.send(primaryMuscles);
    // res.send('hello from exercises/primaryMusclesList');
});
router.get('/amazonLinksList', (req, res) => {

    //mapping through Exercises, selecting only the amazonLinks who has an value and making an object from {equipment: link}
    const amazonObj = Object.fromEntries(Exercises.map((exercise) =>{
        
        if(exercise.amazonLink !== null) {
            return [exercise.equipment, exercise.amazonLink];
        }
    }).filter(exercise=>exercise));

    // var amazonObj = Exercises.reduce((result, exercise) => {
        
    //         result[exercise.equipment] = exercise.amazonLink;
    //         return result;
        
    // })

    res.send(amazonObj);
    // res.send('hello from exercises/amazonLinksList');
});
router.get('/id/:id', (req, res) => {

    const reqID = req.params.id;
    let filteredExercise = Exercises.filter(exercise => {
        return exercise.id ===  reqID;
        
    });
    res.send(filteredExercise);
    // const exerciseID = req.params.id;
    // Exercises.map(exercise => {
    //     exercise.id.includes(exerciseID) && res.send(exercise);
        
    // });
    
    // res.send(`hello from  exercises/exercise/:id`);
});
router.get('/name/:name', (req, res) => {
    const reqName = req.params.name;
    let filteredExercise = Exercises.filter(exercise => {
        return exercise.name.includes(reqName);
        
    });
    res.send(filteredExercise);

    // res.send('hello from exercises/name/:name');
});
router.get('/primaryMuscles/:primaryMuscles', (req, res) => {
    const reqPrimaryMuscles = req.params.primaryMuscles;
    let filteredExercise = Exercises.filter(exercise => {
        return exercise.primaryMuscles.includes(reqPrimaryMuscles);
        
    });
    res.send(filteredExercise);

    // res.send('hello from exercises/primaryMuscles/:primaryMuscles');
});
router.get('/equipment/:equipment', (req, res) => {
    const reqEquipment = req.params.equipment;
    let filteredExercise = Exercises.filter(exercise => {
        return exercise.equipment.includes(reqEquipment);
        
    });
    res.send(filteredExercise);

    // res.send('hello from exercises/equipment/:equipment');
});
router.get('/bodyPart/:bodyPart', (req, res) => {
    const reqBodyPart = req.params.bodyPart;
    let filteredExercise = Exercises.filter(exercise => {
        return exercise.bodyPart.includes(reqBodyPart);
        
    });
    res.send(filteredExercise);
    // res.send('hello from exercises/bodyPart/:bodyPart');
});

export default router;