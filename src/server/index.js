import { Lokka} from 'lokka'
import  {Transport} from 'lokka-transport-http';

const client = new Lokka({
  transport: new Transport('http://localhost:8000/graphql')
});

export function fetchTask(){
	return client.query(`
    {
      fetchTasks {
         id,completed,title
      }
    }
`).then(result => {
   return  result.fetchTasks
},error=>{
	
	return "fail"
});
}

export function getTaskP(id){
	const query = `
	  query ($id: Int!) {
	    getTask(id:$id){
	    	id,
	    	project {
	    		id,name
	    	}
	    }
	  }
	`;
	
	const vars = {id};
	return client.query(query, vars).then(result => {
	  return result.getTask
	},error=>{
	
	return "fail"
});
}

