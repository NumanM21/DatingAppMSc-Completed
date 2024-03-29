using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class SignalRGroup
    {
        public SignalRGroup()
        {}

        public SignalRGroup(string name)
        {
            this.Name = name;
        }

        [Key] // ensure unique group name
        public string Name { get; set; } // name of group should be UNIQUE in DB

        public ICollection<SRGroupConnection> GroupConnections { get; set; } = new List<SRGroupConnection>(); // list of connections in group

        
    }
}