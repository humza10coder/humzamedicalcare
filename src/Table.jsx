import React from 'react';
 function Table()
 {
        return(
            <>
            <table class="table table-striped table-bordered table-hover">
      <tr class="thead-dark">
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
      <tr class="table-success">
        <td>Johny</td>
        <td>Doey</td>
        <td>johny@example.com</td>
      </tr>
      <tr class="table-primary">
        <td>Marygroo</td>
        <td>Moe</td>
        <td>marygroo@example.com</td>
      </tr>
      <tr class="table-danger">
        <td>Annu</td>
        <td>Jaiswal</td>
        <td>annu@codeyoung.com</td>
      </tr>
      <tr class="table-secondary">
        <td>humza</td>
        <td>meheme</td>
        <td>humza@example.com</td>
      </tr>
      <tr class="table-text-warning">
        <td>meme</td>
        <td>meheme</td>
        <td>meme@example.com</td>
      </tr>
  </table>
            </>
        );
 }

 export default Table;